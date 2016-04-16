export default function action(label, callback, condition = () => true) {
  return { label, callback, condition };
};
