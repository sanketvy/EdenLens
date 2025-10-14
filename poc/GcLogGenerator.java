public class GcLogGenerator {
    public static void main(String[] args) throws InterruptedException {
        System.out.println("Starting GC load generator...");

        // Loop forever to create GC activity
        while (true) {
            // Allocate many short-lived objects
            for (int i = 0; i < 1_000_000; i++) {
                String s = new String("GC" + i + System.nanoTime());
            }

            // Occasionally sleep a bit to let GC catch up
            Thread.sleep(100);
        }
    }
}
