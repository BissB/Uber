import React from "react";
import "./List.module.css";

const List = (props) => {
  return (
    <ul>
      <li>
        <a href="https://auth.uber.com/v2/?breeze_init_req_id=237cdb5a-2d1e-4838-96b7-be374843387d&breeze_local_zone=phx7&next_url=https%3A%2F%2Fm.uber.com%2Flogin-redirect%2F%3Fmarketing_vistor_id%3D7e5426e0-f466-43a6-bac7-8f695d74eb5c%26previousPath%3D%252Flooking%26uclick_id%3Dfa55c5c9-3fb9-4211-a916-df17258dd8e1&state=6OcrdxbJ4gwM2IlQUMPe7FwxxZJwtbNlYDa97FQ5H4M%3D">
          차량 서비스
        </a>
      </li>
      <li>
        <a href="https://www.uber.com/kr/ko/drive/?uclick_id=fa55c5c9-3fb9-4211-a916-df17258dd8e1">
          운행
        </a>
      </li>
    </ul>
  );
};

export default List;
