import { useContext, useEffect, useRef, useState } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import useApi from '../hooks/useApi';
import { toast } from 'react-toastify';
import {AuthContext} from "../companents/AuthContext"


function LoginPages() {
  const authTokenContextValue=useContext(AuthContext)
  const api = useApi();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  console.log('usestate', email, password);

  const emailRef = useRef();
  const passwordRef = useRef();

  console.log('useRef', emailRef, passwordRef);

  useEffect(() => {
    api.get('/auth')
      .then((res) => {
        console.log('API is working', res);
      })
      .catch((err) => {
        console.log('API is not working', err);
      });
  }, [api]);

  const onFormSubmit = (event) => {
    event.preventDefault();


    const dataForm = new FormData(event.target);
    const formJson = Object.fromEntries(dataForm.entries());

    console.log('Json Verisi', formJson);

    api.post('auth/login', formJson)
      .then((res) => {
        authTokenContextValue.setToken(res.data.data.token)
         toast("Giriş Başarılı")
       })
      .catch((err) => {
        toast.error('🦄 Giriş Yapılamadı Bilgilerinizi Kontrol Ediniz!!!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        });
  };

  return (
    <Form onSubmit={onFormSubmit}>
      <Row className="d-flex justify-content-center">
        <Col sm="12" lg="4" className="">
          <div className="form-groub mb-3">
            <Form.Label>E-mail :</Form.Label>
            <Form.Control
              type="email"
              name="email"
              ref={emailRef}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mb-3">
            <Form.Label>Pasaport :</Form.Label>
            <Form.Control
              type="password"
              name="password"
              ref={passwordRef}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <Button type="submit" variant="success" className="w-100 mt-3">
              <i class="fa-sharp fa-solid fa-paper-plane"></i>
              &nbsp; Gönder
            </Button>
          </div>
        </Col>
      </Row>
    </Form>
  );
}

export default LoginPages;
