import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownViewerProps {
    filePath: string;
}

export const MarkdownViewer: React.FC<MarkdownViewerProps> = ({ filePath }) => {
    const [content, setContent] = useState<string>('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadMarkdown = async () => {
            try {
                // Cargar desde /docs/ en public
                const response = await fetch(`/docs/${filePath}`);
                if (!response.ok) throw new Error('No se pudo cargar el archivo');
                const text = await response.text();
                setContent(text);
            } catch (err) {
                console.error('Error cargando markdown:', err);
                setError(err instanceof Error ? err.message : 'Error desconocido');
            } finally {
                setLoading(false);
            }
        };

        loadMarkdown();
    }, [filePath]);

    if (loading) return <div className="text-center py-4 text-gray-500 text-sm">Cargando...</div>;
    if (error) return <div className="text-center py-4 text-red-500 text-sm">Error: {error}</div>;
    if (!content) return <div className="text-center py-4 text-gray-500 text-sm">Sin contenido</div>;

    return (
        <div className="prose prose-sm max-w-none 
      prose-headings:text-gray-900 prose-headings:font-bold 
      prose-h1:text-xl prose-h2:text-lg prose-h3:text-base
      prose-p:text-gray-700 prose-p:leading-relaxed prose-p:my-2
      prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline 
      prose-code:bg-gray-100 prose-code:text-gray-800 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-xs
      prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:text-xs
      prose-ul:text-gray-700 prose-ol:text-gray-700 
      prose-li:my-1 prose-li:marker:text-gray-500
      prose-blockquote:border-gray-300 prose-blockquote:text-gray-700
      prose-hr:border-gray-300">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {content}
            </ReactMarkdown>
        </div>
    );
};
