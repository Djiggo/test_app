import styles from './styles.module.scss';
import {H1} from "@/ui/H1";
import {H2} from "@/ui/H2";
import {Hr} from "@/ui/Hr";

import logoImg from './images/logo-ge-light.svg';
import {BottomTextBlock} from "@/features/Auth/components/BottomTextBlock/BottomTextBlock";
import {AuthForm} from "@/features/Auth/components/AuthForm/AuthForm";
import {useSelector} from "react-redux";
import {selectCurrentUser} from "@/features/Auth/ducks/selectors";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {ROUTE} from "@/router/interfaces";


export const AuthPage = () => {

  const user = useSelector(selectCurrentUser);
  let navigate = useNavigate();

  useEffect(() => {

    if (user !== null) {
      navigate(ROUTE.HOME);
    }

  }, [user, navigate]);

  return <div className={styles.wrapper}>

    <div className={styles.sidebar}>

      <H1>Welcome</H1>
      <H2>Please sign in to continue</H2>

      <Hr/>

      <img className={styles.logo_img} src={logoImg} alt='logo'/>

      <AuthForm/>

      <Hr/>

      <div className={styles.text_blocks_wrapper}>
        <BottomTextBlock title="LATEST BLOG POST" date="October 15, 2018">
          Create Efficiency with a Creative Asset Management Platform
        </BottomTextBlock>

        <BottomTextBlock title="RECENT TWEET" date="April 25, 2018">
          #HenryStewartEvents are bringing their #CreativeOps show to NYC for the third…
        </BottomTextBlock>
      </div>


    </div>
  </div>
}