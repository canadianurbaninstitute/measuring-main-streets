<script>
	import '../../styles.css';
	import Card from '../../lib/ui/Card.svelte';

	import AveDorval from '../../lib/assets/boundaries/montrealboundaries/AveDorval.svg';
    import AveVictoria from '../../lib/assets/boundaries/montrealboundaries/AveVictoria.svg';
    import BlvdMonk from '../../lib/assets/boundaries/montrealboundaries/BlvdMonk.svg';
    import BoulStMartin from '../../lib/assets/boundaries/montrealboundaries/BoulStMartin.svg';
    import JeanTalon from '../../lib/assets/boundaries/montrealboundaries/JeanTalon.svg';
    import MontRoyal from '../../lib/assets/boundaries/montrealboundaries/MontRoyal.svg';
    import NotreDame from '../../lib/assets/boundaries/montrealboundaries/NotreDame.svg';
    import RueBeaubien from '../../lib/assets/boundaries/montrealboundaries/RueBeaubien.svg';
    import RueFleury from '../../lib/assets/boundaries/montrealboundaries/RueFleury.svg';
    import RueOntario from '../../lib/assets/boundaries/montrealboundaries/RueOntario.svg';
    import RueRichelieu from '../../lib/assets/boundaries/montrealboundaries/RueRichelieu.svg';
    import RueSaintCatherine from '../../lib/assets/boundaries/montrealboundaries/RueSaintCatherine.svg';
    import RueStAnne from '../../lib/assets/boundaries/montrealboundaries/RueStAnne.svg';
    import RueStCharles from '../../lib/assets/boundaries/montrealboundaries/RueStCharles.svg';
    import RueStGeorge from '../../lib/assets/boundaries/montrealboundaries/RueStGeorge.svg';
    import RueStPaul from '../../lib/assets/boundaries/montrealboundaries/RueStPaul.svg';
    import RueWellington from '../../lib/assets/boundaries/montrealboundaries/RueWellington.svg';
    import StDenis from '../../lib/assets/boundaries/montrealboundaries/StDenis.svg';
    import StEustache from '../../lib/assets/boundaries/montrealboundaries/StEustache.svg';
    import StHubert from '../../lib/assets/boundaries/montrealboundaries/StHubert.svg';



</script>

<div class="hero">
	<h1>Montreal, Québec</h1>
</div>

<div class="subtitle">
	<h3>Full Case Studies</h3>
</div>

<div class="card-grid">
	<Card
		link={'/casestudies/toronto/downtownyonge'}
		cardImage={BoulStMartin}
		streetName={'Boulevard St. Martin'}
	/>
	<Card
		link={'/casestudies/montreal/montroyal'}
		cardImage={MontRoyal}
		streetName={'Mont Royal'}
	/>
	<Card
		link={'/casestudies/toronto/downtownyonge'}
		cardImage={RueFleury}
		streetName={'Rue Fleury'}
	/>
    <Card link={'/casestudies/toronto/downtownyonge'} cardImage={RueOntario} streetName={'Rue Ontario'} />
    <Card link={'/casestudies/toronto/downtownyonge'} cardImage={RueSaintCatherine} streetName={'Rue Saint-Catherine'} />
	<Card link={'/casestudies/toronto/downtownyonge'} cardImage={RueStAnne} streetName={'Rue St. Anne'} />
	<Card
		link={'/casestudies/toronto/downtownyonge'}
		cardImage={RueStCharles}
		streetName={'Rue St. Charles'}
	/>
	<Card link={'/casestudies/toronto/downtownyonge'} cardImage={RueStGeorge} streetName={'Rue St. George'} />
	<Card
		link={'/casestudies/toronto/downtownyonge'}
		cardImage={RueStPaul}
		streetName={'Rue St. Paul'}
	/>
	<Card
		link={'/casestudies/toronto/downtownyonge'}
		cardImage={RueWellington}
		streetName={'Rue Wellington'}
	/>
</div>

<div class="subtitle">
	<h3>Data Case Studies</h3>
</div>

<div class="card-grid">
	<Card
		link={'/casestudies/toronto/westqueenwest'}
		cardImage={AveDorval}
		streetName={'Ave Dorval'}
	/>
	<Card
		link={'/casestudies/toronto/westqueenwest'}
		cardImage={AveVictoria}
		streetName={'Avenue Victoria'}
	/>
	<Card
		link={'/casestudies/toronto/westqueenwest'}
		cardImage={BlvdMonk}
		streetName={'Boulevard Monk'}
	/>
	<Card
		link={'/casestudies/toronto/westqueenwest'}
		cardImage={JeanTalon}
		streetName={'Jean Talon'}
	/>
	<Card
		link={'/casestudies/toronto/westqueenwest'}
		cardImage={NotreDame}
		streetName={'Notre Dame'}
	/>
	<Card
		link={'/casestudies/toronto/westqueenwest'}
		cardImage={RueBeaubien}
		streetName={'Rue Beaubien'}
	/>
	<Card link={'/casestudies/toronto/westqueenwest'} cardImage={RueRichelieu} streetName={'Rue Richelieu'} />
	<Card
		link={'/casestudies/toronto/westqueenwest'}
		cardImage={StDenis}
		streetName={'St. Denis'}
	/>
	<Card
		link={'/casestudies/toronto/westqueenwest'}
		cardImage={StEustache}
		streetName={'St. Eustache'}
	/>
	<Card
		link={'/casestudies/toronto/westqueenwest'}
		cardImage={StHubert}
		streetName={'St. Hubert'}
	/>
</div>

<style>

    h1 {
        padding-top: 1em;
    }

	.subtitle {
		display: flex;
		margin: 2em;
	}

	.card-grid {
		border-radius: 1em;
		display: grid;
		background-color: #ddd;
		border: 1px solid #ddd;
		grid-gap: 1px;
		margin: 3em;
		align-items: center;
		justify-content: center;
		grid-template-columns: repeat(1, 1fr);
		overflow: hidden;
	}

	/* WIDE MOBILE */

	@media only screen and (min-width: 480px) {
		.card-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	/*TABLET*/

	@media only screen and (min-width: 768px) {
		.card-grid {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	/*DESKTOP*/
	@media only screen and (min-width: 968px) {
		.card-grid {
			grid-template-columns: repeat(5, 1fr);
		}
	}
</style>
