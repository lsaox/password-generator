var generateBtn = document.querySelector("#generate");

function generatePassword(
  length,
  includeUppercase,
  includeLowercase,
  includeNumbers,
  includeSpecialChars
) {
  // Define the pool of characters based on the requirements
  let pool = "";
  if (includeUppercase) pool += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (includeLowercase) pool += "abcdefghijklmnopqrstuvwxyz";
  if (includeNumbers) pool += "0123456789";
  if (includeSpecialChars) pool += '!@#$%^&*()_+{}[]:"<>?';

  // Check if at least one character type is selected
  if (pool === "") {
    return "Please select at least one character type.";
  }

  // Generate the password
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * pool.length);
    password += pool[randomIndex];
  }

  // // Validate the password
  if (includeUppercase && !/[A-Z]/.test(password)) {
    return "Password must include at least one uppercase letter.";
  }
  if (includeLowercase && !/[a-z]/.test(password)) {
    return "Password must include at least one lowercase letter.";
  }
  if (includeNumbers && !/[0-9]/.test(password)) {
    return "Password must include at least one one number.";
  }
  if (includeSpecialChars && !/[!@#$%^&*()_+{}[\]:"<>?]/.test(password)) {
    return "Password must include at least one one special character.";
  }

  return password;
}

function writePassword() {
  console.log("Button clicked!");
  var passwordLength = 23; // Set desired password length
  var includeUppercase = true; // Include uppercase letters
  var includeLowercase = true; // Include lowercase letters
  var includeNumbers = true; // Include numbers
  var includeSpecialChars = true; // Include special characters

  var password = generatePassword(
    passwordLength,
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSpecialChars
  );
  console.log("This is the password: " + password);

  var passwordText = document.querySelector("#password");

  if (typeof password === "string") {
    passwordText.value = password; // Display the generated password
  } else {
    alert(password); // Display a message if a validation condition is not met
  }
}

generateBtn.addEventListener("click", writePassword);
