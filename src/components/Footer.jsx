import "./Footer.css";


function Footer() {
    return (
        <footer>
            <p id="devs">Desenvolvedores</p>
            <div className="autores">
                <p><br /> Carlos Roberto <br />
                    <p><br />
                        <a href="https://www.linkedin.com/in/carlos-roberto-alves-bezerra-luna-125288224/" target="blank">
                            <img src="https://icons.iconarchive.com/icons/graphics-vibe/simple-rounded-social/48/linkedin-icon.png" alt="Linkedin" />
                        </a>
                    </p>
                </p>
                <p><br /> Alysson Araujo <br />
                    <p><br />
                        <a href="https://www.linkedin.com/in/alysson-araujo/" target="blank">
                            <img src="https://icons.iconarchive.com/icons/graphics-vibe/simple-rounded-social/48/linkedin-icon.png" alt="Linkedin" />
                        </a>
                    </p>
                </p>
            </div>
            <div className="links-rodape">
                <a href="#politica-de-privacidade">Política de Privacidade</a>
                <a href="#termos-de-uso">Termos de Uso</a>
                <a href="#ajuda">Ajuda</a>
            </div>
            <div className="direitos-reservados">
                <p>Todos os direitos reservados - Domado®️ 2025</p>
            </div>
        </footer>
    )
}

export default Footer