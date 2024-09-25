export const normalizePhoneNumberUS = (value: string | undefined) => {
  if (!value) return "";
  value = value.replace(/\D/g, ""); // Remove caracteres não numéricos
  value = value.replace(/(\d{3})(\d)/, "($1) $2"); // Formata o código de área
  value = value.replace(/(\d{3})(\d{4})$/, "$1-$2"); // Formata o número
  return value;
};
