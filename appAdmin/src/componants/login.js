import React from 'react';
import { Form } from "react-router-dom";

function Login(props) {
    return (
        <div>
            <Form action="/processLogin" class="mt-3 form-size mx-auto" method="post">
                <div class="row mb-3 form-layout py-2">
                    <label for="nom" class="col-sm-2 col-form-label">Nom utilisateur:</label>
                    <div class="col-sm-10 d-flex justify-content-center">
                        <input type="text" class="input-layout" id="nom" name="nom" defaultValue="ilovedogs" required />
                    </div>
                </div>
                <div class="row mb-3 form-layout py-2">
                    <label for="mdp" class="col-sm-2 col-form-label">Mot de passe:</label>
                    <div class="col-sm-10 d-flex justify-content-center">
                        <input type="text" class="input-layout" id="mdp" name="mdp" defaultValue="ihatedogs" required />
                    </div>
                </div>
                <div class="text-center">
                    <input type="submit" class="buttonForm px-3 py-1" value="Soumettre" />
                </div>
            </Form>
        </div>
    );
  }

  export default Login;