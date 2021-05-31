import React, { Dispatch, SetStateAction, useState } from 'react';
import { IconButton, InputAdornment } from '@material-ui/core';
import VisilityIcon from '@material-ui/icons/Visibility';
import VisilityIconOff from '@material-ui/icons/VisibilityOff';

type Props = {
  setShowPassword?: Dispatch<SetStateAction<boolean>>;
};

export function IconButtonComponent(props: Props) {
  const { setShowPassword } = props
  const [showIcon, setShowIcon] = useState<boolean>(true);

  const handleClickShowPassword = () => {
    setShowIcon(!showIcon);
    if (setShowPassword) {
      setShowPassword(showIcon);
    }
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <InputAdornment position="end">
      <IconButton
        aria-label="toggle password visibility"
        onClick={handleClickShowPassword}
        onMouseDown={handleMouseDownPassword}
        edge="end"
      >
        {showIcon? <VisilityIcon /> : <VisilityIconOff />}
      </IconButton>
    </InputAdornment>
  )
}
