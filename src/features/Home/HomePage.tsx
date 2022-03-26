import {useSelector} from "react-redux";
import {selectCurrentUser} from "@/features/Auth/ducks/selectors";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {ROUTE} from "@/router/interfaces";

export const HomePage = () => {

  const user = useSelector(selectCurrentUser);
  let navigate = useNavigate();

  useEffect(() => {

    if (!user) {
      navigate(ROUTE.AUTH);
    }

  }, [user, navigate]);

  return <div>
    Hello {user?.firstName} {user?.lastName}
  </div>;

}