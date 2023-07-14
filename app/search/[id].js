import { useState } from "react";
import { 
    Text,
    SafeAreaView,
    FlatList,
    View,
    TouchableOpacity,
    Image,
    ActivityIndicator
} from "react-native";
import useFetch from "../../hook/useFetch"
import { Stack, useSearchParams, useRouter } from "expo-router"
import styles from '../../styles/search'
import { ScreenHeaderBtn, NearbyJobCard } from '../../components'
import { COLORS, icons, SIZES } from '../../constants'

const SearchResults = () => {
  const { id } = useSearchParams();
  const router = useRouter();
  const [page, setPage] = useState(1);
  const { data, isLoading, error, refetch } = useFetch('search', {
    query: id
  })

  const handlePagination = (direction) => {
    if (direction === 'left' && page > 1) {
        setPage(page - 1)
        refetch()
    } else if (direction === 'right') {
        setPage(page + 1)
        refetch()
    }
}

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
        <Stack.Screen
            options={{
                headerStyle: { backgroundColor: COLORS.lightWhite },
                headerShadowVisible: false,
                headerLeft: () => (
                    <ScreenHeaderBtn
                        iconUrl={icons.left}
                        dimension='60%'
                        handlePress={() => router.back()}
                    />
                ),
                headerTitle: "",
            }}
        />

        <FlatList
            data={data}
            renderItem={({ item }) => (
                <NearbyJobCard
                    job={item}
                    handleNavigate={() => router.push(`/job-details/${item.job_id}`)}
                />
            )}
            keyExtractor={(item) => item.job_id}
            contentContainerStyle={{ padding: SIZES.medium, rowGap: SIZES.medium }}
            ListHeaderComponent={() => (
                <>
                    <View style={styles.container}>
                        <Text style={styles.searchTitle}>{id}</Text>
                        <Text style={styles.noOfSearchedJobs}>Job Opportunities</Text>
                    </View>
                    <View style={styles.loaderContainer}>
                        {isLoading ? (
                            <ActivityIndicator size='large' color={COLORS.primary} />
                        ) : error && (
                            <Text>Oops something went wrong</Text>
                        )}
                    </View>
                </>
            )}
            ListFooterComponent={() => (
                <View style={styles.footerContainer}>
                    <TouchableOpacity
                        style={styles.paginationButton}
                        onPress={() => handlePagination('left')}
                    >
                        <Image
                            source={icons.chevronLeft}
                            style={styles.paginationImage}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                    <View style={styles.paginationTextBox}>
                        <Text style={styles.paginationText}>{page}</Text>
                    </View>
                    <TouchableOpacity
                        style={styles.paginationButton}
                        onPress={() => handlePagination('right')}
                    >
                        <Image
                            source={icons.chevronRight}
                            style={styles.paginationImage}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                </View>
            )}
        />
    </SafeAreaView>
)
}

export default SearchResults