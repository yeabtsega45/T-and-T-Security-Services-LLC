import React from "react";
import { Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import ContactService from "../../services/ContactService";
import {useMutation} from "@tanstack/react-query";

const ContactForm = ({
  inputs = [],
  formClassName = "comment-one__form",
  inputClassName = "comment-form__input-box",
  messageClassName = "text-message-box",
  btnBoxClassName = "btn-box",
  btnClassName = "comment-form__btn",
  btnText = "Send a message",
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendMessageMutation =  useMutation({
    mutationFn: ContactService.sendContactMessage
  });

  const onSubmit = (data) => {
    sendMessageMutation.mutateAsync(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`${formClassName} contact-form-validated`}
    >
      <Row>
        {inputs.map(({ name, placeholder, type, required }) => (
          <Col key={name} xl={6}>
            <div className={inputClassName}>
              <input
                type={type}
                placeholder={placeholder}
                name={name}
                id={name}
                {...register(name, { required })}
              />
              {required && errors[name] && (
                <label htmlFor={name} className="error">
                  This field is required.
                </label>
              )}
            </div>
          </Col>
        ))}
      </Row>
      <Row>
        <Col xl={12}>
          <div className={`${inputClassName} ${messageClassName}`}>
            <textarea
              name="message"
              placeholder="Write a Message"
              {...register("body")}
            ></textarea>
          </div>
          <div className={btnBoxClassName}>
            <button type="submit" className={`thm-btn ${btnClassName}`}>
              { sendMessageMutation.isPending ? "Loading..." : btnText}
            </button>
          </div>
        </Col>
      </Row>
    </form>
  );
};

export default ContactForm;
