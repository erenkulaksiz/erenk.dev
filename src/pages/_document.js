import { Html, Head, Main, NextScript } from 'next/document';
import { readFileSync } from 'fs';
import { join } from 'path';

const SEO = <>
    <meta property="apple-mobile-web-app-capable" name="apple-mobile-web-app-capable" content='yes' />
    <meta property='apple-mobile-web-app-status-bar-style' name="apple-mobile-web-app-status-bar-style" content='default' />
    <meta property='format-detection' name="format-detection" content='telephone=no' />
    <meta property='mobile-web-app-capable' name="mobile-web-app-capable" content='yes' />
    <link rel='shortcut icon' href='/favicon.ico' />
    <meta property='twitter:card' name="twitter:card" content='summary' />
    <meta property='twitter:url' name="twitter:url" content='https://eren.one' />
    <meta property='og:type' name="og:type" content='website' />
    <meta property='og:site_name' name="og:site_name" content='eren.one' />
</>;

const InlineStyle = ({ assetPrefix, file, nonce }) => {
    const cssPath = join(process.cwd(), '.next', file);
    const cssSource = readFileSync(cssPath, 'utf-8');
    const html = { __html: cssSource };
    const id = `${assetPrefix}/_next/${file}`;
    return <style dangerouslySetInnerHTML={html} data-href={id} nonce={nonce} />;
};

class CriticalCssHead extends Head {
    getCssLinks({ allFiles }) {
        const { assetPrefix } = this.context;
        const { nonce } = this.props;
        const isCss = (file) => /\.css$/.test(file);
        const renderCss = (file) => <InlineStyle key={file} file={file} nonce={nonce} assetPrefix={assetPrefix} />;
        return allFiles && allFiles.length > 0 ? allFiles.filter(isCss).map(renderCss) : null;
    }
}

const erenkdev = () => {
    return (
        <Html lang='en'>
            <Head>
                <head dangerouslySetInnerHTML={{
                    __html: `
<!-- https://i.pinimg.com/originals/60/c1/4a/60c14a43fb4745795b3b358868517e79.png -->
`
                }}>
                </head>
                <meta charSet="UTF-8" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet"></link>
                {SEO}
                <script
                    async
                    src={`https://www.googletagmanager.com/gtag/js?id=G-V0RX3S6JG7`}
                />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-V0RX3S6JG7', {page_path: window.location.pathname,});`,
                    }}
                />
            </Head>
            <body>
                <noscript className="p-2 absolute bg-white" style={{ zIndex: 999 }}>If you are seeing this message, that means <strong>JavaScript has been disabled on your browser</strong>, please <strong>enable JavaScript</strong> to make this app work.</noscript>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export default erenkdev;