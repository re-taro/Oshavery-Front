import React from "react";
import type { FC } from "react";

import MemberPopup from "./MemberPopup";

import style from "../../styles/components/atoms/MemberCard.module.scss";

type Props = {
  id: string,
  // element_id: string,
  name: string,
  avatar_url: string,
  bot: boolean,
  func_show_memberpopup: (target_id: string) => void
};

const MemberCard: FC<Props> = React.memo((props) => {
  return (
    <div className={style.member_box}>
      <div className={`${style.member} member_element`} onClick={() => props.func_show_memberpopup(props.id)}>
        <img className={`${style.avatar} member_element`} src={props.avatar_url}></img>
        {!props.bot && (<span className={`${style.name} member_element`}>{props.name}</span>)}
        {props.bot && (<span className={`${style.bot_name} member_element`}>{props.name}</span>)}
        {props.bot && (<span className={`${style.bot} member_element`}>BOT</span>)}
      </div>

      <div className={style.memberpopup} id={props.id}>
        <MemberPopup name={props.name} avatar_url={props.avatar_url} bot={props.bot} />
      </div>
    </div>
  )
});

export default MemberCard;
