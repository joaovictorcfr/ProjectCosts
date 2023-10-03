import styles from "./Company.module.css";
import React from "react";
import Picture from "../../img/Picture.jpg";
import LinkButton from "../layout/LinkButton"

function Empresa() {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1_title}>Empresa</h1>
      <p className={styles.p_text}>Quem somos?</p>
      <p>
        A empresa Cost tem como principal missão fornecer serviços de
        gerenciamento de projetos voltados para empresas que buscam desenvolver
        sistemas de alta complexidade. Essa excelência é alcançada por meio de
        um cálculo meticuloso, que leva em consideração tanto as exigências
        específicas de cada projeto quanto o custo total estabelecido pelo
        cliente para a construção do sistema. Através desse orçamento fixo,
        nossa equipe habilmente incorpora serviços essenciais ao sistema, sempre
        pautada pela meta de respeitar o valor acordado com o cliente.
      </p>
      <img src={Picture} alt="imagem"  width="750" height="500" />
      <p className={styles.text_inf}>
        Inicie sua jornada agora mesmo e explore um novo universo no campo da
        gestão de projetos
      </p>
      <LinkButton to="/newproject" text="Criar projeto" />
    </div>
  );
}
export default Empresa;
