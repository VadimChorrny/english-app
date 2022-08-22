import '../../styles/common/header.scss'; // connect styles

interface Props {
  name: string;
}

const Header = ({ name }: Props) => {
  return (
    <header>
      <div className='header_logo'>Logo</div>
      <div className='header_buttons'>
        <div id='header_name'>{name}</div>
        <div>About</div>
        <div>Blog</div>
      </div>
    </header>
  );
};

export default Header;
