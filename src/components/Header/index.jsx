import EditableTitle from '../EditableTitle';
import './style.css';

export default function Header() {
  return (
    <header className="Header">
      <EditableTitle title="Meu quadro" blockClassName="Header" />
    </header>
  );
}
