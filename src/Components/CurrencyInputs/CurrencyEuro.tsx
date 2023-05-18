// import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

const defaultMaskOptions = {
    prefix: '',
    suffix: ' €',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: '.',
    allowDecimal: true,
    decimalSymbol: ',',
    decimalLimit: 2,
    allowNegative: false,
    allowLeadingZeroes: false,
}

const CurrencyEuro = ({ maskOptions, ...inputProps }: any) => {
    const currencyMask = createNumberMask({
        ...defaultMaskOptions,
        ...maskOptions,
    })

    return <MaskedInput mask={currencyMask} {...inputProps} />
}

CurrencyEuro.defaultProps = {
    inputMode: 'numeric',
    maskOptions: {},
}

// CurrencyEuro.propTypes = {
//   inputmode: PropTypes.string,
//   maskOptions: PropTypes.shape({
//     prefix: PropTypes.string,
//     suffix: PropTypes.string,
//     includeThousandsSeparator: PropTypes.bool,
//     thousandsSeparatorSymbol: PropTypes.string,
//     allowDecimal: PropTypes.bool,
//     decimalSymbol: PropTypes.string,
//     decimalLimit: PropTypes.string,
//     requireDecimal: PropTypes.bool,
//     allowNegative: PropTypes.bool,
//     allowLeadingZeroes: PropTypes.bool,
//     integerLimit: PropTypes.number,
//   }),
// };

export default CurrencyEuro;
