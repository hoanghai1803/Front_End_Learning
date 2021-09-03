function telephoneCheck(str) {
    // RegEx for checking valid phone number
    let phoneRegex1 = /^[1]?[\s]?\d{3}[-\s\.]?\d{3}[-\s\.]?\d{4}$/;
    let phoneRegex2 = /^[1]?[\s]?\(\d{3}\)[-\s\.]?\d{3}[-\s\.]?\d{4}$/;
    return phoneRegex1.test(str) || phoneRegex2.test(str);
}
  