import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import VisilityIcon from '@material-ui/icons/Visibility';
import VisilityIconOff from '@material-ui/icons/VisibilityOff';
import FormControll from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import classNames from 'classnames';
import { OutlinedInput } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        margin: {
            margin: theme.spacing(1),
        },
        withoutLable: {
            marginTop: theme.spacing(3),
        },
        textField: {
            width: '25ch',
        }
    })
);

interface State {
    password: string;
    showPassword: boolean;
}

export default function Field() {
    const classes = useStyles();
    const [values, setValues] = React.useState<State>({
        password: '',
        showPassword: false,
    });

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
      };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
      
    const textFieldClass = classNames(classes.margin, classes.textField);

    return (
        <FormControll className={textFieldClass} variant="outlined">
            <InputLabel htmlFor='outlined-adornment-password'>Password</InputLabel>
            <OutlinedInput
                id="outlined-adorment-password"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisilityIcon /> : <VisilityIconOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
            />
        </FormControll>
    )   
}
