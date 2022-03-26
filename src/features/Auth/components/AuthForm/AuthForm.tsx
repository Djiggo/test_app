import React, { useState} from "react";
import styles from './styles.module.scss';
import {FormGroup} from "@/ui/FormGroup";
import {Label} from "@/ui/Label";
import {TextInput} from "@/ui/TextInput";
import {Button} from "@/ui/Button";
import {ResetPasswordModal} from "@/features/Auth/components/ResetPasswordModal/ResetPasswordModal";
import {AuthActions} from "@/features/Auth/ducks/actions";
import {useSelector} from "react-redux";
import {
  selectAuthIsLoading,
  selectUserError
} from "@/features/Auth/ducks/selectors";
import {useActions} from "@/store/useActions";

type Props = {}
export const AuthForm: React.FC<Props> = () => {

  const [resetPasswordModalVisible, setResetPasswordModalVisible] = useState(false)

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {auth} = useActions(AuthActions)

  const error = useSelector(selectUserError);
  const isLoading = useSelector(selectAuthIsLoading);

  const signIn = () => {
    if (username && password) {
      auth({username, password});
    }
  }

  return <>

    {resetPasswordModalVisible && <ResetPasswordModal onClose={() => setResetPasswordModalVisible(false)}/>}

    <FormGroup>
      <Label>Username</Label>
      <TextInput value={username} onChange={setUsername}/>
    </FormGroup>

    <FormGroup>
      <Label>Password</Label>
      <TextInput type="password" value={password} onChange={setPassword}/>
    </FormGroup>

    {!!error && <Label error>{error.error_description}</Label>}

    <div className={styles.submit_wrapper}>
      <Button disabled={isLoading || !username || !password} onClick={signIn}>Sign In</Button>
      <span
          className={styles.forgot_link}
          onClick={() => setResetPasswordModalVisible(true)}
      >
            Forgot password?
          </span>
    </div>

  </>

}