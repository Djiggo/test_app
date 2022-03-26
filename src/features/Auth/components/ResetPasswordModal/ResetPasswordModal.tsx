import React, {useState} from "react";
import {Modal} from "@/ui/Modal";
import {FormGroup} from "@/ui/FormGroup";
import {Label} from "@/ui/Label";
import {TextInput} from "@/ui/TextInput";
import {ModalFooter} from "@/ui/ModalFooter";
import {Button} from "@/ui/Button";
import styles from './styles.module.scss';
import {useActions} from "@/store/useActions";
import {AuthActions} from "@/features/Auth/ducks/actions";
import {useSelector} from "react-redux";
import {selectIsRecoverySent} from "@/features/Auth/ducks/selectors";

type Props = {
  onClose: () => void
}
export const ResetPasswordModal: React.FC<Props> = ({onClose}) => {

  const [email, setEmail] = useState('');
  const {recoverPassword} = useActions(AuthActions)
  const isRecoverySent = useSelector(selectIsRecoverySent);

  const sendRequest = () => recoverPassword(email);

  if (isRecoverySent) {
    return <Modal title="Email Sent" onClose={onClose}>
      Thank you, instructions to reset your password have been e-mailed to the address you provided!
    </Modal>;
  }

  return <Modal title="Password Reset" onClose={onClose}>

    Please enter the email address associated with your globaledit account to reset your password.

    <FormGroup>
      <Label light>Email Address</Label>
      <TextInput theme="light" value={email} onChange={setEmail}/>
    </FormGroup>
    <ModalFooter>

      <div className={styles.footer_container}>
        <Button disabled={!email} onClick={sendRequest}>Submit</Button>
        <Button secondary onClick={onClose}>Cancel</Button>
      </div>

    </ModalFooter>
  </Modal>

}