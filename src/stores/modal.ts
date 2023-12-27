import {type Component, ref, type Ref, shallowRef} from 'vue'
import {defineStore} from 'pinia'

export const useModalStore = defineStore('modal', () => {
    const isShow: Ref<boolean> = ref(false);
    const component: Ref<Component | null> = shallowRef(null);
    const data: Ref<Object | null> = ref(null);
    const style: Ref<Object | null> = ref(null);
    const modalValue: Ref<Object | null> = ref(null);
    const position: Ref<String | null> = ref(null);
    let isDialog = false;
    let resolveGlobal: any = null;
    let rejectGlobal: any = null;
    const show = (
        newComponent: Component,
        newData: Object | null,
        desktopStyle = {},
        modalPosition?: "center" | "right" | "full" | "top"
    ) => {
        isDialog = false;
        if (newComponent) {
            isShow.value = true;
            component.value = newComponent;
            data.value = newData;
            style.value = desktopStyle;
            if (modalPosition) position.value = modalPosition;
            else position.value = null;
        }
    };

    const close = () => {
        if (isDialog && rejectGlobal) {
            rejectGlobal();
        }
        isShow.value = false;
    };
    const accept = (payload: any) => {
        if (isDialog && resolveGlobal) {
            resolveGlobal(payload);
        }
        isShow.value = false;
    };

    const openDialog = (newComponent: Component, newData?: Object, desktopStyle = {}) => {
        isDialog = true;
        position.value = "";
        return new Promise((resolve, reject) => {
            if (newComponent) {
                isShow.value = true;
                component.value = newComponent;
                data.value = newData ?? null;
                style.value = desktopStyle;
            }
            resolveGlobal = resolve;
            rejectGlobal = reject;
        });
    };

    return {
        modal: {
            isShow,
            component,
            data,
            modalValue,
            style,
            close,
            accept,
            show,
            openDialog,
            position,
        }
    };
})
