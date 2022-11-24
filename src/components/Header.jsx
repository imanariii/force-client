import {Link} from "@mui/material";

export default function Header () {
    return (
        <header>
            <div className="header__body container">
                <Link className="logo" href="../">force</Link>
            </div>
        </header>
    )
}