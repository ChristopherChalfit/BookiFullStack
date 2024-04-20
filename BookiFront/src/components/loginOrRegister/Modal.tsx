import { useState } from "react";
import "./Modal.sass";
import { fetchAuth } from "../../redux/reducers/auth.reducer";
import { useAppDispatch} from "../../redux/store";
import { selectUser } from "../../redux/reducers/user.reducer";
import { useSelector } from "react-redux";
export default function Modal() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const dispatch = useAppDispatch();
  const userSelector = useSelector(selectUser);
  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    dispatch(fetchAuth({email, password}));
    
  };
  return (
    <div id="modal">
      <div className="modal--content">
        Utilisateur {userSelector.name}
        <div className="modal--choice">
          <div className="modal--login">
            Login
            <form className="modal--form" onSubmit={handleSignIn}>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="password">Mot de passe</label>
              <input
                type="text"
                id="password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="button sign-in-button" type="submit">
                Connexion
              </button>
            </form>
          </div>
          <div className="modal--register">Register</div>
        </div>
      </div>
    </div>
  );
}
