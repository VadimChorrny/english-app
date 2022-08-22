interface Props {
  name: string;
}

const Header = ({ name }: Props) => {
  return (
    <header>
      <div>Logo</div>
      <div>
        <div>{name}</div>
        <div>About</div>
        <div>Blog</div>
      </div>
    </header>
  );
};

export default Header;
