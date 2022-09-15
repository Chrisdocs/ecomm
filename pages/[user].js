import { useRouter } from 'next/router'

const User = () => {
	const router = useRouter();
	const { user } = router.query;
}

export default User