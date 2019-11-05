import { I18n } from 'aws-amplify';

export const signUpConfig = {
    hiddenDefaults: [
        'phone_number',
        'email'
    ],
    /*
    signUpFields: [
        { label: "Name", key: "name", required: true, type: "string" }
    ]
    */
};

const authScreenLabels = {
    en: {
        'Enter your username': 'Enter your email',
        'Username': 'Email',
    }
};

I18n.setLanguage('en');
I18n.putVocabularies(authScreenLabels);