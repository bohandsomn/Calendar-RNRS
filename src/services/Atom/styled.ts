import { 
    FlatList,
    FlatListProps, 
    Image,
    ImageProps, 
    Pressable,
    PressableProps, 
    Text, 
    TextProps, 
    View, 
    ViewProps,
    TextInput,
    TextInputProps,
} from 'react-native'

const styled = {
    Text,
    View,
    Image,
    FlatList,
    Pressable,
    TextInput,
}

export type PropsBase = {
    Text: TextProps
    View: ViewProps
    Image: ImageProps
    FlatList: FlatListProps<unknown>
    Pressable: PressableProps
    TextInput: TextInputProps,
}

export default styled
