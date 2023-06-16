
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchDog() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleButtonClick = (breedname, breedid) => {
    navigate(`/dogdata?breedname=${breedname}&breedid=${breedid}`);
  };

  useEffect(() => {
    const gridItems = document.querySelectorAll('.grid-item');

    const filterBreeds = (query) => {
      const searchTerm = query.toLowerCase();

      gridItems.forEach((item) => {
        const breedName = item.innerText.toLowerCase();
        if (breedName.includes(searchTerm)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    };

    filterBreeds(searchQuery);
  }, [searchQuery]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const dogBreeds = [
    ['affenpinscher','036feed0-da8a-42c9-ab9a-57449b530b13'],
    ['airedale','1460844f-841c-4de8-b788-271aa4d63224'],
    ['appenzeller','b56e4273-9ec0-4274-831d-b238225f8fb6'],
    ['australian','03269b7d-c5d6-4a8f-83d1-7a6180d40127'],
    ['bluetick','4823c4e3-d4bf-4cd3-ac6c-88fb2d8a4cdd'],
    ['borzoi', '0d84dcb0-2eb9-41fe-882a-29e140dd0822'],
    ['bouvier', '4ddbe251-72af-495e-8e9d-869217e1d92a'],
    ['boxer', '08c9fafe-fc77-4da8-9824-05f64910a8e1'],
    ['buhund', 'bf7bd04b-b5fb-4195-b793-81c8e08c5839'],
    ['bulldog', '0a8e3eb0-8a37-4734-ad51-c3002c18fd19'],
    ['cattledog', '0543cf54-a255-402e-84e5-f440cc2a67cc'],
    ['chihuahua', '092dae18-86f4-4b41-a3f8-f57fab2f6f2c'],
    ['chow', '03c728a4-258a-4c31-8a1e-5c5e89455cdb'],
    ['clumber', '3c7ca8f4-175f-4d55-bedb-5c53907340f9'],
    ['corgi', '2a4b364b-ec99-467c-b86c-516415601771'],
    ['dachshund', 'db7a3ede-d877-4e6f-bd98-8c9ba9ff1d8d'],
    ['dalmatian', '9ca1f843-4cad-45b3-847f-bc7975864b1d'],
    ['elkhound', '5b89a1a3-549f-4166-b6c7-188926b89caa'],
    ['frise', '5ba3c057-7190-42b4-a9dc-209b9b7130ee'],
    ['germanshepherd', '68f47c5a-5115-47cd-9849-e45d3c378f12'],
    ['greyhound', '305408b2-c3a8-4ec8-99f0-33b865dfaeb6'],
    ['havanese', 'feaa80fe-68bc-42b9-b2b5-2220ec4ff615'],
    ['hound', 'f534c847-bed1-4b58-b194-dc06ecfe20f9'],
    ['husky', 'e0561c26-6d8b-42ae-88df-3047873e929a'],
    ['keeshond', 'df58876a-a3b9-4737-8b0e-90b422e9aa6b'],
    ['kelpie', '2adf5a19-028d-4993-8044-4571008b6d49'],
    ['komondor', '63ada456-e0c7-4b52-9759-25efec4dc540'],
    ['labrador', '9d7c4db8-b9cf-4ed3-af8e-86fc56fbf251'],
    ['leonberg', '0780919e-5b5d-4883-9c09-c6d150e224ce'],
    ['lhasa', 'bf1a3791-0df3-4338-9b99-53ac4641bdda'],
    ['malamute', '5328d59b-b4e4-48e9-98ec-0545c66c4385'],
    ['maltese', '521d8c02-32b9-4b50-8f0d-f791b4bfe697'],
    ['mastiff', 'aecc4be6-63e1-401c-acf9-55f3dd5202e0'],
    ['mountain', 'e16a9f90-786f-40f5-9149-97e2a9a4ed8b'],
    ['otterhound', '8acfbb7f-f4b8-4e56-b64a-283a007a77eb'],
    ['papillon', '88591552-b3bd-45fd-931c-5c8b88aad4f2'],
    ['pekinese', 'dd9017cb-368d-4013-8e9c-01ec3f305365'],
    ['pinscher', '29fac412-58f8-44c4-8a47-77527e55123b'],
    ['pointer', '066e3871-bb5e-493f-9cd6-ccbf2a79c69f'],
    ['poodle', '710ba3fe-c4ee-4d7c-b5cc-1cb19a4815fc'],
    ['pug', 'a6ea38ed-f692-478e-af29-378d0e2cc270'],
    ['pyrenees', '9aafa721-a86d-4df6-880f-75fa117ee468'],
    ['redbone', '0af27828-f1f6-41d4-8580-48025d5e182c'],
    ['retriever', '6dee41b1-0805-4f4e-a079-c8b1cdfa1768'],
    ['ridgeback', '09d3fe1d-03d7-46d8-ad86-d66288563673'],
    ['rottweiler', '11f90c78-8f4c-43f7-bc47-fab733a33c6b'],
    ['saluki', '58f9eb88-7288-42a5-b34a-5b5192eaac17'],
    ['samoyed', 'e3046d15-8fae-4cbb-a6df-4afe80490bbd'],
    ['schipperke', '88025f0c-987f-42e9-98e0-ccb8b53516e9'],
    ['segugio', '15e35786-3ff3-4f59-87eb-d9dd84a29d07'],
    ['setter', '89e06189-4e3c-43a3-9494-16073e888fc0'],
    ['sheepdog', '7ee19070-1a62-40e4-95d8-3b33ef87c9ef'],
    ['shiba', '80d23247-6f46-4962-90cc-c3692b4cb4a5'],
    ['spaniel', '6f540c30-27a8-48cc-8d88-0b1d9fa99167'],
    ['spitz', '6978f4da-e6a9-4f85-b120-d5ac9f416c36'],
    ['springer', '3b7aa8d3-4e4c-424b-bf4d-11453c26bb00'],
    ['terrier', '087979f3-1c45-4d8a-a153-462bf5ea379e'],
    ['tervuren', '947a92b5-0d27-460a-aa18-f15643f39f63'],
    ['vizsla', '2d7be3ac-c72b-4d2f-af62-93a1f1d944f9'],
    ['waterdog', '4750a978-d281-4cdb-a0c8-8f24c06365b5'],
    ['weimaraner', '851399dd-ebd6-49d6-b4c1-ec26ee583799'],
    // ['whippet', '305408b2-c3a8-4ec8-99f0-33b865dfaeb6'],
    ['McDarn', '305408b2-c3a8-4ec8-99f0-33b865dfaeb6'],
  ];

  return (
    <div className="container">
      <div className="container d-flex mt-5 mb-5">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={searchQuery}
          onChange={handleSearchChange}
        />

        <button className="btn btn-warning" type="submit">
          Search
        </button>
      </div>

      <div className="grid col-12">
        <div className="row text-center">
          {dogBreeds.map((dogBreed) => (
            <div
              key={dogBreed[0]}
              className={`grid-item btn-custom text-center ${dogBreed[0]}`}
              onClick={() => handleButtonClick(dogBreed[0], dogBreed[1])}
            >
              <div className="paws1 fas fa-paw hvr-icon-buzz-out" />
              {dogBreed[0]}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchDog;

