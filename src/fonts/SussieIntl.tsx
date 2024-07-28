import { Global } from "@mantine/core";
import book from './SuisseIntl-Book.otf';
import light from './SuisseIntl-Light.otf';
import medium from './SuisseIntl-Medium.otf';
import regular from './SuisseIntl-Regular.otf';

export default function SussieIntlFont() {
    return (
        <Global
            styles={[
                {
                    '@font-face': {
                        fontFamily: 'Sussie',
                        src: `url('${book}') format("otf")`,
                        fontWeight: 900,
                        fontStyle: 'normal',
                    },
                },
                {
                    '@font-face': {
                        fontFamily: 'Sussie',
                        src: `url('${medium}') format("otf")`,
                        fontWeight: 500,
                        fontStyle: 'normal',
                    },
                },
                {
                    '@font-face': {
                        fontFamily: 'Sussie',
                        src: `url('${regular}') format("otf")`,
                        fontWeight: 400,
                        fontStyle: 'normal',
                    },
                },
                {
                    '@font-face': {
                        fontFamily: 'Sussie',
                        src: `url('${light}') format("otf")`,
                        fontWeight: 300,
                        fontStyle: 'normal',
                    },
                },
            ]}
        />
    );
}