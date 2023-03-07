import React from 'react';
import { renderToStream } from '@react-pdf/renderer';

export default async function pegarPDF(Elemento) {
    const pdfStream = await renderToStream(Elemento);

    console.log(pdfStream);
    // res.setHeader('Content-Type', 'application/pdf');
    // pdfStream.pipe(res);
    // pdfStream.on('end', () => console.log('Done streaming, response sent.'));
}
