import styles from './user-card.module.css'
import spin from '@/assets/loading/spin.svg'

interface UserCardProps{
  userName:string;
  userPhotoURL:string;
  loading:boolean;
  size?:number
}

export function UserCard({
  userName,
  userPhotoURL,
  loading,
  size = 100
}:UserCardProps) {
  return (
    <div className={styles['card-user-container']}>
      <div className={styles['card-user-image']} style={{width:size,height:size}}>
        <img src={loading?userPhotoURL:spin} alt={userName} width={size} />
      </div>
      <span>{userName}</span>
    </div>
  )
}
