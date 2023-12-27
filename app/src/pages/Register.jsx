import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useBaseStore, useUserStore } from "../store/useStore";
const Register = () => {
  const signUp = useUserStore((state) => state.signUp);
  const setLoading = useBaseStore((state) => state.setLoading);

  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: '',
    password: '',
    fullname: '',
  });



  const handleChange = (e) => {
    setForm((prevStat) => ({
      ...prevStat,
      [e.target.id]: e.target.value
    }));
  }

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    if (form.email === "") {
      toast.error("Email can not be empty");
      return false;
    }

    if (form.password === "") {
      toast.error("Password can not be empty");
      return false;
    }

    if (form.fullname === "") {
      toast.error("Full name can not be empty");
      return false;
    }

    
    const submitForm = async () => {
      let success = await signUp(form);
      if (success) {
        setLoading(false);
        toast.success("Registered successfully, please login now");
        navigate("/");
      } else {
        toast.error("Please use another email to register");
      }
    }

    submitForm();



  }
  return (
    <>

      <h2>Signup</h2>
      <div className="main-content">
      <form onSubmit={(e) => handleSubmit(e)}>
        <table className='customTable'>
          <tbody>
            <tr>
              <td>
                <input placeholder='Email' type="email" name="email" id="email" value={form.email} onChange={(e) => handleChange(e)} />
              </td>
            </tr>
            <tr>
              <td>
                <input placeholder='Password' type="password" name="password" id="password" value={form.password} onChange={(e) => handleChange(e)} />
              </td>
            </tr>

            <tr>
              <td>
                <input placeholder='Full Name' type="text" name="fullname" id="fullname" value={form.fullname} onChange={(e) => handleChange(e)} />
              </td>
            </tr>

            
            <tr>
              <td><button type="submit" className='btn'>Signup</button></td>
            </tr>
          </tbody>
        </table>
      </form>
      </div>
    </>
  )
}

export default Register;