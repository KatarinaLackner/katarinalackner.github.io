(function () {
  const form = document.getElementById('loginForm');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');
  const submitBtn = document.getElementById('submitBtn');

  function setError(input, message) {
    input.classList.add('field-input--error');
    const el = input.id === 'email' ? emailError : passwordError;
    el.textContent = message;
  }

  function clearError(input) {
    input.classList.remove('field-input--error');
    const el = input.id === 'email' ? emailError : passwordError;
    el.textContent = '';
  }

  function validateEmail(value) {
    if (!value.trim()) return 'Email is required.';
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(value)) return 'Please enter a valid email address.';
    return null;
  }

  function validatePassword(value) {
    if (!value) return 'Password is required.';
    if (value.length < 6) return 'Password must be at least 6 characters.';
    return null;
  }

  function setSubmitting(loading) {
    submitBtn.disabled = loading;
    submitBtn.textContent = loading ? 'Signing in…' : 'Sign in';
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const emailMsg = validateEmail(emailInput.value);
    const passwordMsg = validatePassword(passwordInput.value);

    clearError(emailInput);
    clearError(passwordInput);

    if (emailMsg) {
      setError(emailInput, emailMsg);
      emailInput.focus();
      return;
    }
    if (passwordMsg) {
      setError(passwordInput, passwordMsg);
      passwordInput.focus();
      return;
    }

    setSubmitting(true);

    // Replace with your actual login API call
    setTimeout(function () {
      setSubmitting(false);
      // Example: redirect or show success
      // window.location.href = '/dashboard';
      alert('Login submitted. Connect this form to your backend to handle authentication.');
    }, 800);
  });

  emailInput.addEventListener('input', function () {
    clearError(emailInput);
  });
  emailInput.addEventListener('blur', function () {
    const msg = validateEmail(emailInput.value);
    if (msg) setError(emailInput, msg);
  });

  passwordInput.addEventListener('input', function () {
    clearError(passwordInput);
  });
  passwordInput.addEventListener('blur', function () {
    const msg = validatePassword(passwordInput.value);
    if (msg) setError(passwordInput, msg);
  });
})();
