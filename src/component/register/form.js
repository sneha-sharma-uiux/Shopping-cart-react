import React from "react";
import { Field, reduxForm } from "redux-form";
import { push } from "connected-react-router";
import i18next from "i18next";
import { connect } from "react-redux";
import { inputField } from "./../common/input";
import { passwordRegExp, emailRegExp } from "../../common";
const submit = (values, changePage) => {
  changePage("/");
};
const validate = values => {
  const errors = {};
  if (!values.firstname) {
    errors.firstname = i18next.t("Required");
  }
  if (!values.lastname) {
    errors.lastname = i18next.t("Required");
  }
  if (!values.email) {
    errors.email = i18next.t("Required");
  } else if (!emailRegExp.test(values.email)) {
    errors.email = i18next.t("InvalidEmail");
  }

  if (!values.password) {
    errors.password = i18next.t("Required");
  } else if (values.password.length < 6) {
    errors.password = i18next.t("MinimumLength");
  } else if (!passwordRegExp.test(values.password)) {
    errors.password = i18next.t("PasswordRule2");
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = i18next.t("Required");
  } else if (values.confirmPassword.length < 6) {
    errors.confirmPassword = i18next.t("MinimumLength");
  } else if (!passwordRegExp.test(values.confirmPassword)) {
    errors.confirmPassword = i18next.t("PasswordRule2");
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = i18next.t("ConfirmPasswordRule1");
  }
  return errors;
};
class Register extends React.Component {
  render() {
    const { handleSubmit, changePage } = this.props;
    return (
      <form
        onSubmit={handleSubmit(values => {
          submit(values, changePage);
        })}
        noValidate
      >
        <Field
          name="firstname"
          type="text"
          component={inputField}
          label={i18next.t("FirstName")}
        />
        <Field
          name="lastname"
          type="text"
          component={inputField}
          label={i18next.t("LastName")}
        />
        <Field
          name="email"
          type="email"
          component={inputField}
          label={i18next.t("Email")}
        />
        <Field
          name="password"
          type="password"
          component={inputField}
          label={i18next.t("Password")}
        />
        <Field
          name="confirmPassword"
          type="password"
          component={inputField}
          label={i18next.t("ConfirmPassword")}
          helpText={i18next.t("PasswordRule1")}
        />
        <button
          className="register-form--submit"
          aria-label="Press Enter to Submit"
          type="submit"
        >
          {i18next.t("Submit")}
        </button>
      </form>
    );
  }
}

const registerForm = reduxForm({
  // a unique name for the form
  form: "register",
  validate
})(Register);

const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {
    changePage: url => dispatch(push(url))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(registerForm);
