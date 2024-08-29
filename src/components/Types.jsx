import './../styles/types.scss';

function Types(props) {
  const typesManager = ['Специалист, владеющий жестовым языком', 'Обычный специалист']
  const types = ['signs', 'ordinary']
  return (
    <div className="types">
        <ul className="types_list">
           {
             typesManager.map((role, i) => (
                <li onClick={() => props.setChoosenType(types[i])} className={props.choosenType == types[i] ? 'types_list_li types_list_choosen' : 'types_list_li'}>{role}</li>
             ))
           }
        </ul>
    </div>
  );
}

export default Types;
