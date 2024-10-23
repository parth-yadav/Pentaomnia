"use client";

import { Button } from "@nextui-org/button";
import PropTypes from "prop-types";

interface NotifyButtonProps {
    onClick?: () => void;
    buttonText: string;
}

const NotifyButton: React.FC<NotifyButtonProps> = ({ onClick, buttonText }) => {
    return (
        <Button className='text-tiny' color='primary' radius='full' size='sm' onClick={onClick}>
            {buttonText}
        </Button>
    );
};

// PropTypes validation
NotifyButton.propTypes = {
    onClick: PropTypes.func,
    buttonText: PropTypes.string.isRequired,
};

export default NotifyButton;
