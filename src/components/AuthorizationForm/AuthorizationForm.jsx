import React from 'react';
import s from './auth-form.module.scss';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser, logInUser } from 'redux/user/user-operations';
import { useSelector } from 'react-redux';
import { getUser } from 'redux/user/user-selector';
import { useNavigate } from 'react-router-dom';


const dirtyState = {
  emailDirty: false,
  passwordDirty: false,
};

const errorState = {
  emailError: 'This is a required field',
  passwordError: 'This is a required field',
};

export default function AuthorizationForm() {
  const dispatch = useDispatch();
  const user = useSelector(getUser)
  const navigate = useNavigate()
  

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  // form validation state
  const [error, setError] = useState(errorState);
  const [dirty, setDirty] = useState(dirtyState);
  const [formValidity, setFormValidity] = useState('true');

  const { email, password } = form;
  const { emailError, passwordError } = error;
  const { emailDirty, passwordDirty } = dirty;

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValidity(false);
    } else {
      setFormValidity(true);
    }
  }, [emailError, passwordError]);

  const onInput = e => {
    setForm(prevState => {
      return {
        ...prevState,
        [e.target.id]: e.target.value,
      };
    });

    if (e.target.id === 'password') {
      if (e.target.value.length !== 0 && e.target.value.length < 8) {
        setError(prevState => {
          return {
            ...prevState,
            passwordError: 'Password must be not less than 8 symbols',
          };
        });
      } else if (!e.target.value) {
        setError(prevState => {
          return {
            ...prevState,
            passwordError: 'This is a required field',
          };
        });
      } else {
        setError(prevState => {
          return {
            ...prevState,
            passwordError: '',
          };
        });
      }
    }

    if (e.target.id === 'email') {
      const pattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

      if (e.target.value) {
        if (!pattern.test(String(e.target.value).toLowerCase())) {
          setError(prevState => {
            return {
              ...prevState,
              emailError: 'Incorrect email format',
            };
          });
        } else {
          setError(prevState => {
            return {
              ...prevState,
              emailError: '',
            };
          });
        }
      } else {
        setError(prevState => {
          return {
            ...prevState,
            emailError: 'This is a required field',
          };
        });
      }
    }
  };

  const onBlur = e => {
    switch (e.target.id) {
      case 'email':
        setDirty(prevState => {
          return {
            ...prevState,
            emailDirty: true,
          };
        });
        break;

      case 'password':
        setDirty(prevState => {
          return {
            ...prevState,
            passwordDirty: true,
          };
        });
        break;

      default:
        return;
    }
  };

  const signInUser = e => {
    e.preventDefault()
    dispatch(logInUser(form))
   
  };

  const signUpUser = e => {
    e.preventDefault()
    dispatch(registerUser(form))

  };

 
  return (
    <div>
      <form className={s.form}>
        <div>
          <p className={s.text}>Login to ScienceFit using e-mail and password:</p>
          <div className={s.inputBlock}>
            <div className={s.inputWrapper}>
              <input
                onChange={onInput}
                onBlur={onBlur}
                id="email"
                value={email}
                className={s.input}
                type="text"
                placeholder="E-mail"
              />
              {emailDirty && emailError && (
                <p className={s.message}>{emailError}</p>
              )}
            </div>
            <input
              onChange={onInput}
              onBlur={onBlur}
              id="password"
              value={password}
              className={s.input}
              type="password"
              placeholder="Password"
            />
            {passwordDirty && passwordError && (
              <p className={s.message}>{passwordError}</p>
            )}
          </div>
        </div>
        <div className={s.btnWrapper}>
          <button
            onClick={signInUser}
            className={s.btn}
            disabled={!formValidity}
          >
            Sign in
          </button>
          <button
            onClick={signUpUser}
            className={s.btn}
            disabled={!formValidity}
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}
