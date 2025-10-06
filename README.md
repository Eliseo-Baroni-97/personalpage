# Personal Portfolio

This project is a personal portfolio website built with React and Vite. It features a modern, responsive design and includes sections for a professional profile, education, work experience, skills, and a contact form.

## Contact Form with Formspree

The contact form has been implemented using the official **`@formspree/react`** library, which provides a robust and seamless integration.

- **Reliable State Management**: Handles form submission state (submitting, success, error) out of the box.
- **Simplified Logic**: No need for manual `fetch` requests; the `useForm` hook manages everything.
- **Built-in Validation**: Displays validation errors for fields automatically.

### Configuration

#### 1. Email Subject

With the `@formspree/react` library, the email subject can no longer be set dynamically from the code. You must configure it directly in your Formspree dashboard:

1.  Log in to your Formspree account.
2.  Go to the settings for your form (`myyoawve`).
3.  In the "Settings" tab, find the **Email Subject** field.
4.  Set a custom subject line, for example: `New message from your portfolio`.

#### 2. Domain Lock (Security)

**Action Required:** To prevent your Formspree endpoint from being used on unauthorized websites, you must enable the **Domain Lock** feature.

1.  In your Formspree form settings, go to the "Settings" tab.
2.  Add your production domain (e.g., `eliseo-baroni-97.github.io/personalpage/`) to the list of allowed domains.
