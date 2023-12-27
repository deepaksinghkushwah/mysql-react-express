import Joi from "joi";
const registerValidation = async(data) => {
    const schema = Joi.object({
        fullname: Joi.string().min(3).required(),
        email: Joi.string().email().min(5).required(),
        password: Joi.string().min(3).required(),
      });
      return schema.validateAsync(data);
}


export default registerValidation;
