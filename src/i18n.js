import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).init({
  // we init with resources
  resources: {
    en: {
      translations: {
        Home: "Home",
        Product: "Product",
        SignIn: "SignIn",
        SignUp: "SignUp",
        Register: "Register",
        items: "items",
        Login: "Login",
        Email: "Email",
        Username: "Username",
        Password: "Password",
        Submit: "Submit",
        Required: "Required",
        FirstName: "FirstName",
        LastName: "LastName",
        ConfirmPassword: "ConfirmPassword",
        PasswordRule1: "Password must have a number and alphabet only",
        InvalidEmail: "Invalid email address",
        MinimumLength: "Minimum length 6 characters",
        Minlength15: "Must be 15 characters or less",
        PasswordRule2: "Must have a number and alphabet only",
        ConfirmPasswordRule1: "Confirm password needs to be same as password",
        GetAccessMsg: "Get access to your Order, Wishlist and Recommendations",
        PersonalDetailsMessage:
          "We do not share your personal details with anyone",
        Footer: "Copyright @ 2011-2019 Sabka Bazaar Grocery Supplies Pvt Ltd",
        CartNoItem: "No Item in your cart",
        FavItemsMessage: "your favourite items are just click away",
        PromoMessage: "Promo can be applied on payment page",
        CheckOut: "Proceed to Checkout",
        Shopping: "Start Shopping"
      }
    }
  },
  fallbackLng: "en",
  debug: true,

  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ","
  },

  react: {
    wait: true
  }
});

export default i18n;
