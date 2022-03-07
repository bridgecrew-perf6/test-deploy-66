import SvgIcon from '@mui/material/SvgIcon';

const CheckCircleIcon = ({ ...props }) => {
  return (
    <SvgIcon {...props}>
      <path
        d="M22 12C22 17.5229 17.5229 22 12 22C6.47714 22 2 17.5229 2 12C2 6.47714 6.47714 2 12 2C17.5229 2 22 6.47714 22 12ZM10.8433 17.2949L18.2627 9.87556C18.5146 9.62363 18.5146 9.21512 18.2627 8.96319L17.3503 8.05081C17.0983 7.79883 16.6898 7.79883 16.4379 8.05081L10.3871 14.1015L7.56214 11.2766C7.3102 11.0246 6.90169 11.0246 6.64972 11.2766L5.73734 12.189C5.4854 12.4409 5.4854 12.8494 5.73734 13.1013L9.93089 17.2949C10.1829 17.5469 10.5913 17.5469 10.8433 17.2949V17.2949Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};

CheckCircleIcon.propTypes = {};

CheckCircleIcon.defaultProps = {};

export default CheckCircleIcon;
