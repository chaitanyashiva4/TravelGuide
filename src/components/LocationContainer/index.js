import './index.css'

import {
  LocationCardContainer,
  HeadingDescriptionContainer,
  Heading,
  Paragraph,
} from './styledCompomnents'

const LocationContainer = props => {
  const {locationData} = props
  const {imageUrl, name, description} = locationData

  return (
    <li className="list-location">
      <LocationCardContainer>
        <img src={imageUrl} alt={name} className="image" />
        <HeadingDescriptionContainer>
          <Heading>{name}</Heading>
          <Paragraph>{description}</Paragraph>
        </HeadingDescriptionContainer>
      </LocationCardContainer>
    </li>
  )
}
export default LocationContainer
