declare module 'html-docx-js/dist/html-docx' {
    const htmlDocx: {
        asBlob: (html: string) => Blob;
        asDataURI: (html: string) => string;
    };
    export default htmlDocx;
}
