import Link from "next/link";

export const Header: React.FC = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link href="/">
                <a>ホーム</a>
              </Link>
            </li>
            <li>
              <Link href="/contacts">
                <a>お問い合わせ</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
