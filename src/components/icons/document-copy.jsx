import PropTypes from 'prop-types';
import SvgIcon from '@mui/material/SvgIcon';

const DocumentCopyIcon = ({ copied, ...props }) => {
  return (
    <SvgIcon {...props}>
      {copied ? (
        <>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.5 1.99995V5.5C14.5 6.09674 14.5781 6.57804 15 7C15.4219 7.42196 15.9034 7.5 16.5 7.5H20.0016V17.25C20.0016 17.5454 19.9434 17.838 19.8302 18.111C19.7172 18.384 19.5515 18.632 19.3426 18.841C19.1336 19.0499 18.8856 19.2156 18.6126 19.3286C18.3396 19.4418 18.047 19.5 17.7516 19.5H8.75156C8.15482 19.5 7.58252 19.2629 7.16056 18.841C6.7386 18.419 6.50156 17.8466 6.50156 17.25V4.24995C6.50156 3.65322 6.7386 3.08091 7.16056 2.65896C7.58252 2.237 8.15482 1.99995 8.75156 1.99995H14.5ZM11.668 15.7242C11.8415 15.9084 12.0688 16 12.2961 16C12.5234 16 12.7507 15.9084 12.9242 15.7242L17.7397 10.6103C18.0868 10.2418 18.0868 9.64489 17.7397 9.27638C17.3927 8.90787 16.8316 8.90787 16.4846 9.27638L12.2961 13.7243L10.5154 11.8333C10.1684 11.4648 9.60727 11.4659 9.26026 11.8344C8.91325 12.2018 8.91325 12.7987 9.26026 13.1672L11.668 15.7242Z"
            fill="currentColor"
          />
          <path
            d="M16 5.4V2L20 6H16.6C16.4408 6 16.2883 5.93678 16.1757 5.82426C16.0632 5.71174 16 5.55913 16 5.4Z"
            fill="currentColor"
          />
        </>
      ) : (
        <>
          <path
            d="M13.0015 6.74995V1.99995H8.75156C8.15482 1.99995 7.58252 2.237 7.16056 2.65896C6.7386 3.08091 6.50156 3.65322 6.50156 4.24995V17.25C6.50156 17.8466 6.7386 18.419 7.16056 18.841C7.58252 19.2629 8.15482 19.5 8.75156 19.5H17.7516C18.047 19.5 18.3396 19.4418 18.6126 19.3286C18.8856 19.2156 19.1336 19.0499 19.3426 18.841C19.5515 18.632 19.7172 18.384 19.8302 18.111C19.9434 17.838 20.0016 17.5454 20.0016 17.25V8.99995H15.2515C14.6549 8.99995 14.0825 8.76289 13.6606 8.34093C13.2386 7.91898 13.0015 7.34669 13.0015 6.74995Z"
            fill="currentColor"
          />
          <path
            d="M14.5008 6.7499V2.49989L19.5008 7.4999H15.2508C15.0518 7.4999 14.8612 7.42088 14.7204 7.28023C14.5798 7.13957 14.5008 6.94881 14.5008 6.7499Z"
            fill="currentColor"
          />
        </>
      )}
      <path
        d="M5.50378 4.627C5.06436 4.78182 4.68379 5.06918 4.41459 5.44943C4.14539 5.82969 4.0008 6.2841 4.00078 6.75V17.254C4.00078 18.5137 4.50123 19.722 5.39202 20.6128C6.28282 21.5035 7.491 22.004 8.75079 22.004H15.2448C16.2248 22.004 17.0578 21.378 17.3668 20.504H8.75079C7.88883 20.504 7.06218 20.1616 6.45269 19.5521C5.8432 18.9426 5.50078 18.1159 5.50078 17.254L5.50378 4.627Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};

DocumentCopyIcon.propTypes = { copied: PropTypes.bool };

DocumentCopyIcon.defaultProps = { copied: false };

export default DocumentCopyIcon;
