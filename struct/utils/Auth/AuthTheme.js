/*
 * Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */

export const Container = {'padding': '0', 'margin':'0', 'marginTop': '50px'};
export const FormContainer = {};
export const FormSection = {'boxShadow': 'none', 'borderRadius': '2px'};
export const FormField = {};
export const SectionHeader = {};
export const SectionBody = {};
export const SectionFooter = {};
export const SectionFooterPrimaryContent = {};
export const SectionFooterSecondaryContent = {};
export const Input = {};
export const Button = {'backgroundColor': '#17252A'};
export const PhotoPickerButton = {};
export const PhotoPlaceholder = {};
export const SignInButton = {};
export const SignInButtonIcon = {};
export const SignInButtonContent = {};
export const Strike = {};
export const StrikeContent = {};
export const ActionRow = {};
export const FormRow = {};
export const A = {'color': '#17252A'};
export const Hint = {};
export const Radio = {};
export const InputLabel = {};
export const AmazonSignInButton = {};
export const FacebookSignInButton = {};
export const GoogleSignInButton = {};
export const OAuthSignInButton = {};
export const Toast = {};
export const NavBar = {'border': 'none'};
export const NavRight = {'textAlign': 'left'};
export const Nav = {};
export const NavItem = {};
export const NavButton = {'backgroundColor': '#17252A'};

const AuthTheme = {
  container: Container,
  formContainer: FormContainer,
  formSection: FormSection,
  formField: FormField,

  sectionHeader: SectionHeader,
  sectionBody: SectionBody,
  sectionFooter: SectionFooter,
  sectionFooterPrimaryContent: SectionFooterPrimaryContent,
  sectionFooterSecondaryContent: SectionFooterSecondaryContent,

  input: Input,
  button: Button,
  photoPickerButton: PhotoPickerButton,
  photoPlaceholder: PhotoPlaceholder,
  signInButton: SignInButton,
  signInButtonIcon: SignInButtonIcon,
  signInButtonContent: SignInButtonContent,
  amazonSignInButton: AmazonSignInButton,
  facebookSignInButton: FacebookSignInButton,
  googleSignInButton: GoogleSignInButton,
  oAuthSignInButton: OAuthSignInButton,

  formRow: FormRow,
  strike: Strike,
  strikeContent: StrikeContent,
  actionRow: ActionRow,
  a: A,

  hint: Hint,
  radio: Radio,
  inputLabel: InputLabel,
  toast: Toast,
  
  navBar: NavBar,
  nav: Nav,
  navRight: NavRight,
  navItem: NavItem,
  navButton: NavButton
};

export default AuthTheme;