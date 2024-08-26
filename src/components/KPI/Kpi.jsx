import stylesKpi from './kpi.module.css';

function createKpi({
  onClick = null,
  name = null,
  value = null,
  unit = null,
  status = null,
  icon = null,
  optionalDescrition = null
}) {
  return (
    <div className={`${stylesKpi.kpi} ${stylesKpi[status]}`} onClick={onClick}>
      <div className={stylesKpi.kpiContainer}>
        <div className={stylesKpi.kpiContainerDiv}>
          {icon && <img src={icon} alt="" />}
        </div>
        <div className={stylesKpi.kpiValue}>
          {value && <h1>{value}</h1>}
          {unit && <h3>{unit}</h3>}
        </div>
        <div className={stylesKpi.kpiContainerDiv}></div>
      </div>
        <div className={stylesKpi.kpiDescription}>
          {name && <p>{name}</p>}
          {optionalDescrition && <b>{optionalDescrition}</b>}
        </div>
    </div>
  );
}

export default CreateKpi;