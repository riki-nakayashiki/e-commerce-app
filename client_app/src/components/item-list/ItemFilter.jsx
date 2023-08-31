export default function ItemFilter() {
  return (
    <section className="item-filter">
      <select id="gender-select" onChange={getGender}>
        <option value={""}>Gender</option>
        <option value={"Boys"}>Boys</option>
        <option value={"Girls"}>Girls</option>
        <option value={"Men"}>Men</option>
        <option value={"Women"}>Women</option>
        <option value={"Unisex"}>Unisex</option>
      </select>
    </section>
  )
}
function getGender(e) {
  // console.log(document.getElementById('gender-select').value);
  console.log(e.target.value);
}
